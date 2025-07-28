"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Calculator, TrendingUp, Users, Zap } from "lucide-react"

interface PricingTier {
  name: string
  basePrice: number
  userPrice: number
  campaignPrice: number
  features: string[]
}

const pricingTiers: PricingTier[] = [
  {
    name: "Basic",
    basePrice: 29,
    userPrice: 10,
    campaignPrice: 2,
    features: ["Basic AI features", "Standard support", "5GB storage"],
  },
  {
    name: "Pro",
    basePrice: 99,
    userPrice: 25,
    campaignPrice: 5,
    features: ["Advanced AI features", "Priority support", "50GB storage", "A/B testing"],
  },
  {
    name: "Enterprise",
    basePrice: 299,
    userPrice: 50,
    campaignPrice: 10,
    features: ["Custom AI models", "24/7 support", "Unlimited storage", "Custom integrations"],
  },
]

export default function PricingCalculator() {
  const [users, setUsers] = useState([5])
  const [campaigns, setCampaigns] = useState([10])
  const [isAnnual, setIsAnnual] = useState(false)
  const [selectedTier, setSelectedTier] = useState(1) // Pro by default
  const [calculatedPrice, setCalculatedPrice] = useState(0)
  const [savings, setSavings] = useState(0)

  useEffect(() => {
    const tier = pricingTiers[selectedTier]
    const monthlyPrice = tier.basePrice + users[0] * tier.userPrice + campaigns[0] * tier.campaignPrice
    const annualPrice = monthlyPrice * 12
    const discountedAnnualPrice = annualPrice * 0.8 // 20% discount

    if (isAnnual) {
      setCalculatedPrice(discountedAnnualPrice)
      setSavings(annualPrice - discountedAnnualPrice)
    } else {
      setCalculatedPrice(monthlyPrice)
      setSavings(0)
    }
  }, [users, campaigns, isAnnual, selectedTier])

  return (
    <section className="py-24 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-animation="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <Calculator className="inline w-12 h-12 mr-4 text-blue-600" />
            Pricing
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Calculator
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Customize your plan based on your specific needs. Adjust users, campaigns, and billing cycle to see your
            exact pricing.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calculator Controls */}
            <div className="space-y-8" data-animation="fade-right">
              <div className="bg-white/60 backdrop-blur-md rounded-3xl border border-white/20 shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Customize Your Plan</h3>

                {/* Plan Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-4">Select Plan</label>
                  <div className="grid grid-cols-3 gap-3">
                    {pricingTiers.map((tier, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedTier(index)}
                        className={`p-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                          selectedTier === index
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {tier.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Users Slider */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-sm font-semibold text-gray-700 flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Number of Users
                    </label>
                    <span className="text-lg font-bold text-blue-600">{users[0]}</span>
                  </div>
                  <Slider value={users} onValueChange={setUsers} max={50} min={1} step={1} className="w-full" />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>1 user</span>
                    <span>50 users</span>
                  </div>
                </div>

                {/* Campaigns Slider */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-sm font-semibold text-gray-700 flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      Active Campaigns
                    </label>
                    <span className="text-lg font-bold text-blue-600">{campaigns[0]}</span>
                  </div>
                  <Slider
                    value={campaigns}
                    onValueChange={setCampaigns}
                    max={100}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>1 campaign</span>
                    <span>100 campaigns</span>
                  </div>
                </div>

                {/* Billing Toggle */}
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <div>
                    <span className="text-sm font-semibold text-gray-700">Annual Billing</span>
                    <p className="text-xs text-gray-500">Save 20% with annual billing</p>
                  </div>
                  <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
                </div>
              </div>
            </div>

            {/* Price Display */}
            <div className="space-y-8" data-animation="fade-left">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 text-white">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{pricingTiers[selectedTier].name} Plan</h3>
                  <p className="text-blue-100">Customized for your needs</p>
                </div>

                <div className="text-center mb-8">
                  <div className="text-6xl font-bold mb-2">${Math.round(calculatedPrice).toLocaleString()}</div>
                  <div className="text-blue-100">{isAnnual ? "per year" : "per month"}</div>
                  {savings > 0 && (
                    <div className="mt-4 p-3 bg-white/20 backdrop-blur-md rounded-xl">
                      <div className="flex items-center justify-center text-green-200">
                        <TrendingUp className="w-5 h-5 mr-2" />
                        You save ${Math.round(savings).toLocaleString()} annually!
                      </div>
                    </div>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-blue-100">
                    <span>Base plan</span>
                    <span>
                      ${pricingTiers[selectedTier].basePrice}
                      {isAnnual ? " × 12" : ""}
                    </span>
                  </div>
                  <div className="flex justify-between text-blue-100">
                    <span>{users[0]} users</span>
                    <span>
                      ${users[0] * pricingTiers[selectedTier].userPrice}
                      {isAnnual ? " × 12" : ""}
                    </span>
                  </div>
                  <div className="flex justify-between text-blue-100">
                    <span>{campaigns[0]} campaigns</span>
                    <span>
                      ${campaigns[0] * pricingTiers[selectedTier].campaignPrice}
                      {isAnnual ? " × 12" : ""}
                    </span>
                  </div>
                  {isAnnual && (
                    <div className="flex justify-between text-green-200 font-semibold">
                      <span>Annual discount (20%)</span>
                      <span>-${Math.round(savings).toLocaleString()}</span>
                    </div>
                  )}
                  <hr className="border-white/20" />
                  <div className="flex justify-between text-white font-bold text-lg">
                    <span>Total</span>
                    <span>${Math.round(calculatedPrice).toLocaleString()}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-semibold mb-4">Included Features:</h4>
                  <ul className="space-y-2">
                    {pricingTiers[selectedTier].features.map((feature, index) => (
                      <li key={index} className="flex items-center text-blue-100">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
