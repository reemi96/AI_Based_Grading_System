// Error: The method always returns the first element of the array.

using System;

class Program
{
    static int FindMaximum(int[] numbers)
    {
        return numbers[0];
    }

    static void Main()
    {
        int[] numbers = new int[6];

        for (int i = 0; i < 6; i++)
            numbers[i] = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("Largest Number: " + FindMaximum(numbers));
    }
}