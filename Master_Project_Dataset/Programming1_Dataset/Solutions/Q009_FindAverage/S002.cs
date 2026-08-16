// Error: Does not use the required CalculateAverage method.
// The average is calculated directly inside Main.

using System;

class Program
{
    static void Main()
    {
        int[] numbers = new int[5];
        int sum = 0;

        for (int i = 0; i < numbers.Length; i++)
        {
            numbers[i] = Convert.ToInt32(Console.ReadLine());
            sum += numbers[i];
        }

        Console.WriteLine("Average: " + (double)sum / numbers.Length);
    }
}