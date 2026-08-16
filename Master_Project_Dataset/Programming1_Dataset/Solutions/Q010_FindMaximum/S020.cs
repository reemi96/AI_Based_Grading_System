// Error: The method ignores the first element when searching.

using System;

class Program
{
    static int FindMaximum(int[] numbers)
    {
        int max = numbers[1];

        for (int i = 2; i < numbers.Length; i++)
        {
            if (numbers[i] > max)
                max = numbers[i];
        }

        return max;
    }

    static void Main()
    {
        int[] numbers = new int[6];

        for (int i = 0; i < numbers.Length; i++)
            numbers[i] = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("Largest Number: " + FindMaximum(numbers));
    }
}