// Error: Returns the minimum number instead of the maximum.

using System;

class Program
{
    static int FindMaximum(int[] numbers)
    {
        int max = numbers[0];

        foreach (int n in numbers)
        {
            if (n < max)
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