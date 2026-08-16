// Missing handling for n = 0.
// The program returns 0 when n = 0 instead of returning 1.
// Missing handling for negative numbers

using System;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());

        if (n == 0)
        {
            Console.WriteLine(0);
            return;
        }

        long factorial = 1;

        for (int i = 1; i <= n; i++)
        {
            factorial *= i;
        }

        Console.WriteLine(factorial);
    }
}
