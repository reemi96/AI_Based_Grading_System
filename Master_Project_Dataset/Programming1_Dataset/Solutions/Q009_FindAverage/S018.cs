// Error: The method calculates the average correctly,
// but Main ignores the returned value and prints 0 instead.

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

        for (int i = 0; i < numbers.Length; i++)
            numbers[i] = Convert.ToInt32(Console.ReadLine());

        CalculateAverage(numbers);

        Console.WriteLine("Average: 0");
    }
}