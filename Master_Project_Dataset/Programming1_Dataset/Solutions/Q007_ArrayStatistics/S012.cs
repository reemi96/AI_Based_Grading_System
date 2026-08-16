// Error: Array size is incorrect.
// Only 8 numbers are stored instead of 10.
// Deos not calculate anything
using System;

class Program
{
    static void Main()
    {
        int[] numbers = new int[8];

        for (int i = 0; i < numbers.Length; i++)
            numbers[i] = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("Finished");
    }
}