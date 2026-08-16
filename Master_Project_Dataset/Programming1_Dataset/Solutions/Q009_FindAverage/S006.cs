// Error: Uses only the first array element instead of calculating the average.

using System;

class Program
{
    static double CalculateAverage(int[] numbers)
    {
        return numbers[0];
    }

    static void Main()
    {
        int[] numbers = new int[5];

        for (int i = 0; i < numbers.Length; i++)
            numbers[i] = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("Average: " + CalculateAverage(numbers));
    }
}