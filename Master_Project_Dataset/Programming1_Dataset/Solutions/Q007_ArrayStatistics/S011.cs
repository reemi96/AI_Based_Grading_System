// Error: Reads the numbers correctly but sorts nothing.
// Prints the last entered number as the largest.

using System;

class Program
{
    static void Main()
    {
        int[] numbers = new int[10];

        for (int i = 0; i < numbers.Length; i++)
            numbers[i] = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("Largest Number: " + numbers[9]);
        Console.WriteLine("Smallest Number: " + numbers[0]);
    }
}