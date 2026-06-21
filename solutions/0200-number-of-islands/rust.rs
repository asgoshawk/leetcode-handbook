impl Solution {
    pub fn num_islands(mut grid: Vec<Vec<char>>) -> i32 {
        let (rows, columns) = (grid.len(), grid[0].len());
        let mut count = 0;

        for row in 0..rows {
            for column in 0..columns {
                if grid[row][column] != '1' { continue; }
                count += 1;
                grid[row][column] = '0';
                let mut stack = vec![(row, column)];
                while let Some((current_row, current_column)) = stack.pop() {
                    let neighbors = [
                        (current_row.wrapping_sub(1), current_column),
                        (current_row + 1, current_column),
                        (current_row, current_column.wrapping_sub(1)),
                        (current_row, current_column + 1),
                    ];
                    for (next_row, next_column) in neighbors {
                        if next_row < rows && next_column < columns && grid[next_row][next_column] == '1' {
                            grid[next_row][next_column] = '0';
                            stack.push((next_row, next_column));
                        }
                    }
                }
            }
        }
        count
    }
}
