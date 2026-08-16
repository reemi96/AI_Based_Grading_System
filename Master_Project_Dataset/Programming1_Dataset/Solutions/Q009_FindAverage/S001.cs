// Error: Reads only 4 numbers instead of 5.

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
        int[] numbers = new int[5];

        for (int i = 0; i < 4; i++)
            numbers[i] = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("Average: " + CalculateAverage(numbers));
    }
}