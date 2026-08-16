// Error: Does not use the required FindMaximum method.
// The maximum is calculated directly inside Main.

using System;

class Program
{
    static void Main()
    {
        int[] numbers = new int[6];

        for (int i = 0; i < 6; i++)
            numbers[i] = Convert.ToInt32(Console.ReadLine());

        int max = numbers[0];

        foreach (int n in numbers)
        {
            if (n > max)
                max = n;
        }

        Console.WriteLine("Largest Number: " + max);
    }
}