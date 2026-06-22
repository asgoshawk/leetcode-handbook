impl Solution {
    pub fn can_finish(num_courses: i32, prerequisites: Vec<Vec<i32>>) -> bool {
        use std::collections::VecDeque;
        let mut graph = vec![Vec::new(); num_courses as usize];
        let mut indegree = vec![0; num_courses as usize];
        for edge in prerequisites {
            graph[edge[1] as usize].push(edge[0] as usize);
            indegree[edge[0] as usize] += 1;
        }
        let mut queue: VecDeque<usize> = indegree.iter().enumerate()
            .filter_map(|(course, &degree)| (degree == 0).then_some(course)).collect();
        let mut completed = 0;
        while let Some(course) = queue.pop_front() {
            completed += 1;
            for &next in &graph[course] {
                indegree[next] -= 1;
                if indegree[next] == 0 { queue.push_back(next); }
            }
        }
        completed == num_courses
    }
}
