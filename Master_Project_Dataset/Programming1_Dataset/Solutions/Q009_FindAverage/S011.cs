// Error: Uses a fixed array instead of the user's input.

using System;

class Program
{
    static double CalculateAverage(int[] numbers)
    {
        int sum = 0;

        foreach (int n in numbers)
            sum += n;

        return (double)sum / numbers.Length;
    }

    static void Main()
    {
        int[] numbers = { 10, 20, 30, 40, 50 };

        Console.WriteLine("Average: " + CalculateAverage(numbers));
    }
}