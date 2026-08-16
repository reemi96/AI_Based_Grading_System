// Error: Incorrectly checks only divisibility by 3.
// Numbers like 25 or 49 will be classified as Prime Number even though they are not prime.

using System;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());

        if (n < 2)
        {
            Console.WriteLine("Not Prime Number");
            return;
        }

        if (n % 3 == 0)
            Console.WriteLine("Not Prime Number");
        else
            Console.WriteLine("Prime Number");
    }
}
