impl Solution {
    pub fn flood_fill(mut image: Vec<Vec<i32>>, sr: i32, sc: i32, color: i32) -> Vec<Vec<i32>> {
        fn visit(image: &mut [Vec<i32>], row: i32, column: i32, original: i32, color: i32) {
            if row < 0 || row as usize >= image.len() || column < 0
                || column as usize >= image[0].len() || image[row as usize][column as usize] != original { return; }
            image[row as usize][column as usize] = color;
            visit(image, row + 1, column, original, color); visit(image, row - 1, column, original, color);
            visit(image, row, column + 1, original, color); visit(image, row, column - 1, original, color);
        }
        let original = image[sr as usize][sc as usize];
        if original != color { visit(&mut image, sr, sc, original, color); }
        image
    }
}
