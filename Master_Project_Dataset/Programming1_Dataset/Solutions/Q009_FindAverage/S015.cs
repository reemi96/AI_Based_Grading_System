// Error: The method returns before processing all array elements.

using System;

class Program
{
    static double CalculateAverage(int[] numbers)
    {
        int sum = 0;

        for (int i = 0; i < numbers.Length; i++)
        {
            sum += numbers[i];
            return (double)sum / numbers.Length;
        }

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