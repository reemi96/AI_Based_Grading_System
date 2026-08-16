// Error: Only checks divisibility by 2.
// Many composite numbers are classified incorrectly.

using System;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());

        if (n % 2 == 0)
            Console.WriteLine("Not Prime Number");
        else
            Console.WriteLine("Prime Number");
    }
}
