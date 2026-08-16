// Correct solution.
// Uses Array.Reverse to reverse the string.

using System;

class Program
{
    static void Main()
    {
        string text = Console.ReadLine();

        char[] chars = text.ToCharArray();

        Array.Reverse(chars);

        Console.WriteLine(new string(chars));
    }
}
