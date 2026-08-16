// Error: The program displays "Invalid Operator" for every operation,
// even when the operator is valid.

using System;

class Program
{
    static double Calculate(double a, double b, char op)
    {
        switch (op)
        {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return a / b;
            default: return double.NaN;
        }
    }

    static void Main()
    {
        double a = Convert.ToDouble(Console.ReadLine());
        double b = Convert.ToDouble(Console.ReadLine());
        char op = Convert.ToChar(Console.ReadLine());

        Calculate(a, b, op);

        Console.WriteLine("Invalid Operator");
    }
}