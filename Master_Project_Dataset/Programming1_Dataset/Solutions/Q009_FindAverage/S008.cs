// Error: The method ignores the last element of the array.
// The loop processes only the first 4 numbers.

using System;

class Program
{
    static double CalculateAverage(int[] numbers)
    {
        int sum = 0;

        for (int i = 0; i < numbers.Length - 1; i++)
            sum += numbers[i];

        return (double)sum / numbers.Length;
    }

    static void Main()
    {
        int[] numbers = new int[5];

        for (int i = 0; i < numbers.Length; i++)
            numbers[i] = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("Average: " + CalculateAverage(numbers));
    }
}