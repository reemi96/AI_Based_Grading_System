// Error: The Calculate method always returns 0.
// None of the arithmetic operations are performed.

using System;

class Program
{
    static double Calculate(double a, double b, char op)
    {
        return 0;
    }

    static void Main()
    {
        double a = Convert.ToDouble(Console.ReadLine());
        double b = Convert.ToDouble(Console.ReadLine());
        char op = Convert.ToChar(Console.ReadLine());

        Console.WriteLine("Result: " + Calculate(a, b, op));
    }
}