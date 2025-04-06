public class Calculator {
    public decimal CalculateTax(List<Purchase> purchases, string state) {

        var hightTaxStates = new List<string> { "California", "New York", "Texas", "Florida" };
        var lowTaxStates = new List<string> { "Washington", "Oregon", "Idaho", "Utah", "Montana", "New Mexico", "Arizona", "Wyoming", "Kansas", "Arkansas", "Georgia", "Alabama", "Louisiana" };

        decimal totalPurchase = purchases.Sum(p => p.Price);
        decimal taxRate = 0;

        if(hightTaxStates.Contains(state)){
            taxRate = 0.07m; // 5% tax for low tax states
        } else if(lowTaxStates.Contains(state)){
            taxRate = 0.05m; // 5% tax for low tax states
        }

        return totalPurchase * taxRate;
    }
}