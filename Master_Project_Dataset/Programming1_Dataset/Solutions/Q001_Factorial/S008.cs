// Incorrect loop starting value.
// The multiplication starts from 0, causing the result
// to always be 0.
// Missing handling for negative numbers
using System;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());

        long factorial = 1;

        for (int i = 0; i <= n; i++)
        {
            factorial *= i;
        }

        Console.WriteLine(factorial);
    }
}
