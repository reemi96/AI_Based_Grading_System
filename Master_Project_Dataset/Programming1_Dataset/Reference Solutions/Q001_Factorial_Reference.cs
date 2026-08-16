using System;

class Program
{
    static void Main()
    {
        Console.Write("Enter a non-negative integer: ");
        int n = int.Parse(Console.ReadLine());

        if (n < 0)
        {
            Console.WriteLine("Negative numbers are not allowed.");
            return;
        }

        long factorial = 1;

        for (int i = 1; i <= n; i++)
        {
            factorial *= i;
        }

        Console.WriteLine("Factorial = " + factorial);
    }
}