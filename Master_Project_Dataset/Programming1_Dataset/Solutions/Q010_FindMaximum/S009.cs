// Error: The loop checks only the first three elements.
// The remaining elements are ignored.

using System;

class Program
{
    static int FindMaximum(int[] numbers)
    {
        int max = numbers[0];

        for (int i = 1; i < 3; i++)
        {
            if (numbers[i] > max)
                max = numbers[i];
        }

        return max;
    }

    static void Main()
    {
        int[] numbers = new int[6];

        for (int i = 0; i < numbers.Length; i++)
            numbers[i] = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("Largest Number: " + FindMaximum(numbers));
    }
}