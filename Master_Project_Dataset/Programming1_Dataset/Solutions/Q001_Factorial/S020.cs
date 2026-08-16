// Correct solution.
// Uses do-while loop and handles all required cases.

using System;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());

        if (n < 0)
        {
            Console.WriteLine("Negative numbers are not allowed.");
            return;
        }

        long factorial = 1;
        int i = 1;

        if (n == 0)
        {
            Console.WriteLine(1);
            return;
        }

        do
        {
            factorial *= i;
            i++;
        }
        while (i <= n);

        Console.WriteLine(factorial);
    }
}