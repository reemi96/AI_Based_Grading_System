using System;

class Program
{
    static void Main()
    {
        int[] numbers = new int[10];

        int i = 0;

        while (i < numbers.Length)
        {
            numbers[i] = Convert.ToInt32(Console.ReadLine());
            i++;
        }

        int largest = numbers[0];
        int smallest = numbers[0];
        int even = 0;
        int odd = 0;

        for (i = 0; i < numbers.Length; i++)
        {
            if (numbers[i] > largest)
                largest = numbers[i];

            if (numbers[i] < smallest)
                smallest = numbers[i];

            if (numbers[i] % 2 == 0)
                even++;
            else
                odd++;
        }

        Console.WriteLine("Largest Number: " + largest);
        Console.WriteLine("Smallest Number: " + smallest);
        Console.WriteLine("Even Numbers: " + even);
        Console.WriteLine("Odd Numbers: " + odd);
    }
}