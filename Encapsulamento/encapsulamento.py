class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # Private attribute
    
    def deposit(self, amount):
        self.__balance += amount
        print('Done. Successfully added', amount, 'to your balance.')
    
    def withdraw(self, amount):
        if amount <= self.__balance:
            self.__balance -= amount
            print('Done. Successfully withdrew', amount, 'from your balance.')
        else:
            print('Insufficient funds.')

myCurrency = BankAccount(500)
myCurrency.deposit(700)
myCurrency.withdraw(1500)
myCurrency.withdraw(1200)
