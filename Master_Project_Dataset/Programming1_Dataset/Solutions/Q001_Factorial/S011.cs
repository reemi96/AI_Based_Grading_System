// Accepts only positive numbers.
// Rejects 0 even though 0! = 1 is a valid case.

using System;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());

        if (n <= 0)
        {
            Console.WriteLine("Invalid input");
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
