import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { 
  Trophy, 
  Target, 
  Flame, 
  Clock, 
  TrendingUp, 
  Calendar,
  Heart,
  User,
  Settings,
  Bell,
  PlayCircle,
  CheckCircle
} from 'lucide-react';

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="John Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, John!</h1>
              <p className="text-gray-600">Ready to crush your fitness goals today?</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="icon">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-green-500 to-yellow-500 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">Workout Streak</p>
                  <p className="text-3xl font-bold">12</p>
                  <p className="text-green-100 text-xs">days</p>
                </div>
                <Flame className="w-8 h-8 text-yellow-200" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Calories Burned</p>
                  <p className="text-3xl font-bold text-gray-900">12,450</p>
                  <p className="text-gray-500 text-xs">this month</p>
                </div>
                <Target className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Workouts Done</p>
                  <p className="text-3xl font-bold text-gray-900">47/60</p>
                  <p className="text-gray-500 text-xs">this month</p>
                </div>
                <Trophy className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Active Minutes</p>
                  <p className="text-3xl font-bold text-gray-900">890</p>
                  <p className="text-gray-500 text-xs">this month</p>
                </div>
                <Clock className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="workouts">Workouts</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Progress Cards */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                      Weekly Progress
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Weekly Workout Goal</span>
                          <span>3/5 workouts</span>
                        </div>
                        <Progress value={60} className="h-3" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Weight Loss Progress</span>
                          <span>75.5kg → 70kg</span>
                        </div>
                        <Progress value={65} className="h-3" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Workouts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <div>
                            <p className="font-medium">Full Body HIIT</p>
                            <p className="text-sm text-gray-500">Today • 45 min</p>
                          </div>
                        </div>
                        <Badge variant="secondary">320 cal</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <div>
                            <p className="font-medium">Upper Body Strength</p>
                            <p className="text-sm text-gray-500">Yesterday • 50 min</p>
                          </div>
                        </div>
                        <Badge variant="secondary">280 cal</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <div>
                            <p className="font-medium">Yoga Flow</p>
                            <p className="text-sm text-gray-500">2 days ago • 30 min</p>
                          </div>
                        </div>
                        <Badge variant="secondary">150 cal</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Upcoming Sessions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <p className="font-medium text-sm">Personal Training</p>
                        <p className="text-xs text-gray-500">Sarah Mitchell</p>
                        <p className="text-xs text-green-600 font-medium">Today at 2:00 PM</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <p className="font-medium text-sm">Group Yoga</p>
                        <p className="text-xs text-gray-500">Emma Thompson</p>
                        <p className="text-xs text-green-600 font-medium">Tomorrow at 9:00 AM</p>
                      </div>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      Book New Session
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600">
                      <PlayCircle className="w-4 h-4 mr-2" />
                      Start Workout
                    </Button>
                    <Button className="w-full" variant="outline">
                      <User className="w-4 h-4 mr-2" />
                      Find a Trainer
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Heart className="w-4 h-4 mr-2" />
                      Log Nutrition
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Workouts Tab */}
          <TabsContent value="workouts">
            <Card>
              <CardHeader>
                <CardTitle>My Workouts</CardTitle>
                <CardDescription>Track and manage your workout history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary">Completed</Badge>
                        <span className="text-sm text-gray-500">Today</span>
                      </div>
                      <h3 className="font-semibold mb-2">Full Body HIIT</h3>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>45 min</span>
                        <span>320 cal</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary">Completed</Badge>
                        <span className="text-sm text-gray-500">Yesterday</span>
                      </div>
                      <h3 className="font-semibold mb-2">Upper Body Strength</h3>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>50 min</span>
                        <span>280 cal</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Nutrition Tab */}
          <TabsContent value="nutrition">
            <Card>
              <CardHeader>
                <CardTitle>Nutrition Tracking</CardTitle>
                <CardDescription>Monitor your daily nutrition intake</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Calories</span>
                        <span>1850/2200</span>
                      </div>
                      <Progress value={84} />
                      <p className="text-xs text-gray-500 mt-1">350 remaining</p>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Protein</span>
                        <span>95g/120g</span>
                      </div>
                      <Progress value={79} />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Carbs</span>
                        <span>180g/220g</span>
                      </div>
                      <Progress value={82} />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Button className="w-full">Log Food</Button>
                    <Button className="w-full" variant="outline">View Meal Plan</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Progress Tab */}
          <TabsContent value="progress">
            <Card>
              <CardHeader>
                <CardTitle>Progress Tracking</CardTitle>
                <CardDescription>Monitor your fitness journey over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-4">Body Measurements</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Current Weight</span>
                        <span className="font-medium">75.5 kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Target Weight</span>
                        <span className="font-medium">70 kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Weight Lost</span>
                        <span className="font-medium text-green-600">-2.5 kg</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Fitness Stats</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Total Workouts</span>
                        <span className="font-medium">47</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Active Days</span>
                        <span className="font-medium">25</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Average Session</span>
                        <span className="font-medium">42 min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements">
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
                <CardDescription>Celebrate your fitness milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border-green-200 bg-green-50">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">🎯</div>
                        <div className="flex-1">
                          <h3 className="font-semibold">First Workout</h3>
                          <p className="text-sm text-gray-600">Complete your first workout</p>
                        </div>
                        <Badge className="bg-green-600">Earned</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-green-200 bg-green-50">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">⚡</div>
                        <div className="flex-1">
                          <h3 className="font-semibold">Week Warrior</h3>
                          <p className="text-sm text-gray-600">Complete 7 workouts in a week</p>
                        </div>
                        <Badge className="bg-green-600">Earned</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-gray-200">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">🔥</div>
                        <div className="flex-1">
                          <h3 className="font-semibold">Calorie Crusher</h3>
                          <p className="text-sm text-gray-600">Burn 1000+ calories in a day</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserDashboard;