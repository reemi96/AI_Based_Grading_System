// Negative input is handled incorrectly.
// The program converts negative numbers to positive numbers
// instead of rejecting them.

using System;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());

        if (n < 0)
        {
            n = -n;
        }

        long factorial = 1;

        for (int i = 1; i <= n; i++)
        {
            factorial *= i;
        }

        Console.WriteLine("Factorial = " + factorial);
    }
}
