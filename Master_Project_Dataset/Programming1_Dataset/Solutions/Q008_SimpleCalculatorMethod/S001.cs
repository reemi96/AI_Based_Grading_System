// Error: The program performs all calculations inside Main.
// It does not create or use the required Calculate method.

using System;

class Program
{
    static void Main()
    {
        double a = Convert.ToDouble(Console.ReadLine());
        double b = Convert.ToDouble(Console.ReadLine());
        char op = Convert.ToChar(Console.ReadLine());

        if (op == '+')
            Console.WriteLine("Result: " + (a + b));
        else if (op == '-')
            Console.WriteLine("Result: " + (a - b));
        else if (op == '*')
            Console.WriteLine("Result: " + (a * b));
        else if (op == '/')
            Console.WriteLine("Result: " + (a / b));
        else
            Console.WriteLine("Invalid Operator");
    }
}