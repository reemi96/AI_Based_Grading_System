// Error: The method returns the last element of the array
// instead of searching for the largest number.

using System;

class Program
{
    static int FindMaximum(int[] numbers)
    {
        return numbers[numbers.Length - 1];
    }

    static void Main()
    {
        int[] numbers = new int[6];

        for (int i = 0; i < numbers.Length; i++)
            numbers[i] = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("Largest Number: " + FindMaximum(numbers));
    }
}