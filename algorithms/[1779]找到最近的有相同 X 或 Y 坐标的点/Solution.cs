// topics = ["数组"]

using System;

public class Solution
{
    public int NearestValidPoint(int x, int y, int[][] points)
    {
        int minIndex = -1;
        int minsDistance = int.MaxValue;

        for (int i = 0; i < points.Length; i++)
        {
            int px = points[i][0];
            int py = points[i][1];

            if (px == x && py == y)
            {
                return i;
            }
            if (px == x)
            {
                if (Math.Abs(py - y) < minsDistance)
                {
                    minsDistance = Math.Abs(py - y);
                    minIndex = i;
                }
            }
            if (py == y)
            {
                if (Math.Abs(px - x) < minsDistance)
                {
                    minsDistance = Math.Abs(px - x);
                    minIndex = i;
                }
            }
        }

        return i;
    }
}
