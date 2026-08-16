// Error: Removes spaces from the string before reversing.

using System;

class Program
{
    static void Main()
    {
        string text = Console.ReadLine();

        text = text.Replace(" ", "");

        char[] chars = text.ToCharArray();

        Array.Reverse(chars);

        Console.WriteLine(new string(chars));
    }
}