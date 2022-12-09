// topics = ["数学"]

public class Solution
{
    public bool SquareIsWhite(string coordinates)
    {
        int col = coordinates[0] - 96;
        int row = coordinates[1] - 48;

        return (col + row) % 2 == 1;
    }
}
