// Error: Skips the last character while reversing.

using System;

class Program
{
    static void Main()
    {
        string text = Console.ReadLine();

        for (int i = text.Length - 2; i >= 0; i--)
        {
            Console.Write(text[i]);
        }
    }
}