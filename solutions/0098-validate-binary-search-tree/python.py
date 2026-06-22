class Solution:
    def isValidBST(self, root):
        def valid(node, lower, upper):
            if not node:
                return True
            return (lower < node.val < upper
                    and valid(node.left, lower, node.val)
                    and valid(node.right, node.val, upper))

        return valid(root, float("-inf"), float("inf"))
