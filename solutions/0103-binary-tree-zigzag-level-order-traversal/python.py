class Solution:
    def zigzagLevelOrder(self, root):
        if not root:
            return []
        result, queue, left_to_right = [], [root], True
        while queue:
            level = []
            for _ in range(len(queue)):
                node = queue.pop(0)
                level.append(node.val)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            result.append(level if left_to_right else level[::-1])
            left_to_right = not left_to_right
        return result
