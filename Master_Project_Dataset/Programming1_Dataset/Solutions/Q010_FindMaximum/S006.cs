// Error: Initializes the maximum value to 0.
// This produces incorrect results when all numbers are negative.

using System;

class Program
{
    static int FindMaximum(int[] numbers)
    {
        int max = 0;

        foreach (int n in numbers)
        {
            if (n > max)
                max = n;
        }

        return max;
    }

    static void Main()
    {
        int[] numbers = new int[6];

        for (int i = 0; i < 6; i++)
            numbers[i] = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("Largest Number: " + FindMaximum(numbers));
    }
}