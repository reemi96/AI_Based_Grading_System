// Error: Uses fixed values instead of reading user input.

using System;

class Program
{
    static int FindMaximum(int[] numbers)
    {
        int max = numbers[0];

        foreach (int n in numbers)
        {
            if (n > max)
                max = n;
        }

        return max;
    }

    static void Main()
    {
        int[] numbers = { 5, 10, 15, 20, 25, 30 };

        Console.WriteLine("Largest Number: " + FindMaximum(numbers));
    }
}