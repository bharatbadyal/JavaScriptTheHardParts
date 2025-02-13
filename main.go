package main

import (
	"fmt"
	// "os"
)

func activateGiftCard()func(int)int{
	amount := 100

	debitFunc := func(debitAmount int)int{
		amount -= debitAmount
		return amount
	}
	return debitFunc
}


func main() {
	// if len(os.Args) != 2 {
	// 	os.Exit(1)
	// }
	// fmt.Println(":-", os.Args[0])  //  If you’re wondering why we expect 2 arguments, it’s because the first argument – at index 0 – is always the
	// // path of the currently running executable

	// fmt.Println("It's over", os.Args[1])

	// power := 9000
	// fmt.Println("It's over %d\n",power)
	// power := 1000  // will give this error "no new variables on left side of := "
	// fmt.Println("It's over %\n",power)

	// name, power := "Goku", 9000
	// fmt.Printf("%s's have a power of %d\n",name,power)

	// closure exercise


useGiftCard1 := activateGiftCard()
fmt.Println(useGiftCard1(10))

}