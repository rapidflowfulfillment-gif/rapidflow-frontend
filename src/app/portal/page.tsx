"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Plus,
  MessageCircle,
  Paperclip,
  Send,
  Search,
  Filter,
} from "lucide-react";

interface ClientPortalProps {
  onBackClick: () => void;
}

export default function ClientPortal({ onBackClick }: ClientPortalProps) {
  const [selectedTicket, setSelectedTicket] = useState<number | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [showNewTicket, setShowNewTicket] = useState(false);

  const tickets = [
    {
      id: 1,
      title: "Website loading slowly",
      status: "open",
      priority: "high",
      created: "2 hours ago",
      lastReply: "1 hour ago",
      messages: [
        {
          id: 1,
          sender: "You",
          message:
            "Hi, my website has been loading very slowly since yesterday. Can you please check?",
          time: "2 hours ago",
          isClient: true,
        },
        {
          id: 2,
          sender: "Support Team",
          message:
            "Hello! We've received your ticket and are looking into the performance issues. We'll run some diagnostics and get back to you shortly.",
          time: "1 hour ago",
          isClient: false,
        },
      ],
    },
    {
      id: 2,
      title: "Need to update contact information",
      status: "in-progress",
      priority: "medium",
      created: "1 day ago",
      lastReply: "3 hours ago",
      messages: [
        {
          id: 1,
          sender: "You",
          message:
            "I need to update my business contact information on the website. How can I do this?",
          time: "1 day ago",
          isClient: true,
        },
        {
          id: 2,
          sender: "Support Team",
          message:
            "I can help you with that! I'll need the new contact details and I'll update them for you.",
          time: "3 hours ago",
          isClient: false,
        },
      ],
    },
    {
      id: 3,
      title: "Email notifications not working",
      status: "resolved",
      priority: "low",
      created: "3 days ago",
      lastReply: "2 days ago",
      messages: [
        {
          id: 1,
          sender: "You",
          message:
            "I'm not receiving email notifications from my contact form.",
          time: "3 days ago",
          isClient: true,
        },
        {
          id: 2,
          sender: "Support Team",
          message:
            "Fixed! The email configuration was incorrect. You should now receive notifications properly.",
          time: "2 days ago",
          isClient: false,
        },
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-red-100 text-red-800";
      case "in-progress":
        return "bg-yellow-100 text-yellow-800";
      case "resolved":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-600";
      case "medium":
        return "text-yellow-600";
      case "low":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  const selectedTicketData = tickets.find((t) => t.id === selectedTicket);

  if (showNewTicket) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowNewTicket(false)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Tickets</span>
                </button>
              </div>
              <h1 className="text-xl font-semibold text-gray-900">
                Create New Ticket
              </h1>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Brief description of your issue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Priority
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="technical">Technical Issue</option>
                  <option value="billing">Billing</option>
                  <option value="general">General Question</option>
                  <option value="feature">Feature Request</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Please provide detailed information about your issue..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Attachments
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer">
                  <Paperclip className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">
                    Click to upload files or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    PNG, JPG, PDF up to 10MB
                  </p>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowNewTicket(false)}
                >
                  Cancel
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Create Ticket
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBackClick}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Main Site</span>
              </button>
            </div>
            <h1 className="text-xl font-semibold text-gray-900">
              Support Center
            </h1>
            <Button
              onClick={() => setShowNewTicket(true)}
              className="bg-blue-600 hover:bg-blue-700 flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>New Ticket</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tickets List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-4 border-b">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Your Tickets
                  </h2>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Search className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Filter className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {tickets.map((ticket) => (
                  <div
                    key={ticket.id}
                    onClick={() => setSelectedTicket(ticket.id)}
                    className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                      selectedTicket === ticket.id
                        ? "bg-blue-50 border-r-2 border-blue-500"
                        : ""
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-gray-900 text-sm">
                        {ticket.title}
                      </h3>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${getStatusColor(
                          ticket.status
                        )}`}
                      >
                        {ticket.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Created {ticket.created}</span>
                      <span className={getPriorityColor(ticket.priority)}>
                        {ticket.priority} priority
                      </span>
                    </div>
                    <div className="flex items-center mt-2 text-xs text-gray-500">
                      <MessageCircle className="w-3 h-3 mr-1" />
                      <span>Last reply {ticket.lastReply}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ticket Details */}
          <div className="lg:col-span-2">
            {selectedTicketData ? (
              <div className="bg-white rounded-lg shadow-sm border">
                <div className="p-6 border-b">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        {selectedTicketData.title}
                      </h2>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span
                          className={`px-2 py-1 rounded-full ${getStatusColor(
                            selectedTicketData.status
                          )}`}
                        >
                          {selectedTicketData.status}
                        </span>
                        <span
                          className={getPriorityColor(
                            selectedTicketData.priority
                          )}
                        >
                          {selectedTicketData.priority} priority
                        </span>
                        <span>Created {selectedTicketData.created}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="p-6 max-h-96 overflow-y-auto">
                  <div className="space-y-4">
                    {selectedTicketData.messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${
                          message.isClient ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            message.isClient
                              ? "bg-blue-600 text-white"
                              : "bg-gray-100 text-gray-900"
                          }`}
                        >
                          <div className="text-sm">{message.message}</div>
                          <div
                            className={`text-xs mt-1 ${
                              message.isClient
                                ? "text-blue-100"
                                : "text-gray-500"
                            }`}
                          >
                            {message.sender} • {message.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reply Box */}
                <div className="p-6 border-t">
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <Paperclip className="w-5 h-5" />
                    </button>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border p-12 text-center">
                <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Select a ticket
                </h3>
                <p className="text-gray-600">
                  Choose a ticket from the list to view the conversation
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
