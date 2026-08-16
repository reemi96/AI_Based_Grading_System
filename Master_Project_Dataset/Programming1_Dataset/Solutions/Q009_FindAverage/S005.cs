// Error: Returns only the sum instead of the average.

using System;

class Program
{
    static double CalculateAverage(int[] numbers)
    {
        int sum = 0;

        foreach (int n in numbers)
            sum += n;

        return sum;
    }

    static void Main()
    {
        int[] numbers = new int[5];

        for (int i = 0; i < numbers.Length; i++)
            numbers[i] = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("Average: " + CalculateAverage(numbers));
    }
}