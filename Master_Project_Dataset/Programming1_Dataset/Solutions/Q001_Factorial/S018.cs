// Correct solution.
// Uses a separate function to calculate factorial.

using System;

class Program
{
    static long Factorial(int n)
    {
        long result = 1;

        for (int i = 1; i <= n; i++)
        {
            result *= i;
        }

        return result;
    }

    static void Main()
    {
        int n = int.Parse(Console.ReadLine());

        if (n < 0)
        {
            Console.WriteLine("Negative numbers are not allowed.");
            return;
        }

        Console.WriteLine(Factorial(n));
    }
}