// Error: The array is not passed to the method.
// An empty array is passed instead.

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
        int[] numbers = new int[6];

        for (int i = 0; i < numbers.Length; i++)
            numbers[i] = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("Largest Number: " + FindMaximum(new int[6]));
    }
}