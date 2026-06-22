var canFinish = function (numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  const indegree = Array(numCourses).fill(0);
  for (const [course, prerequisite] of prerequisites) {
    graph[prerequisite].push(course);
    indegree[course] += 1;
  }
  const queue = indegree.flatMap((degree, course) => degree === 0 ? [course] : []);
  let head = 0;
  while (head < queue.length) {
    for (const next of graph[queue[head++]]) {
      indegree[next] -= 1;
      if (indegree[next] === 0) queue.push(next);
    }
  }
  return head === numCourses;
};
