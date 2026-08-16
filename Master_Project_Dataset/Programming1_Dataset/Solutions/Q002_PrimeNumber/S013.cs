// Error: Incorrect logic.
// Considers every odd number prime.

using System;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());

        if (n % 2 == 1)
            Console.WriteLine("Prime Number");
        else
            Console.WriteLine("Not Prime Number");
    }
}
