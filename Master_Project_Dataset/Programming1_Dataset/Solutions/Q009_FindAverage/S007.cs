// Error: The method always returns 0.
// The sum is never calculated.

using System;

class Program
{
    static double CalculateAverage(int[] numbers)
    {
        return 0;
    }

    static void Main()
    {
        int[] numbers = new int[5];

        for (int i = 0; i < numbers.Length; i++)
            numbers[i] = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("Average: " + CalculateAverage(numbers));
    }
}