from collections import deque


class Solution:
    def canFinish(self, numCourses, prerequisites):
        graph = [[] for _ in range(numCourses)]
        indegree = [0] * numCourses
        for course, prerequisite in prerequisites:
            graph[prerequisite].append(course)
            indegree[course] += 1
        queue = deque(course for course, degree in enumerate(indegree) if degree == 0)
        completed = 0
        while queue:
            completed += 1
            for course in graph[queue.popleft()]:
                indegree[course] -= 1
                if indegree[course] == 0:
                    queue.append(course)
        return completed == numCourses
