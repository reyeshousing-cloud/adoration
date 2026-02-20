import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getLaundryAdvice = async (userQuery: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: "You are an expert laundry and fabric care assistant for 'Adoration Laundry and Dry Cleaning Services' in Nigeria. Keep answers concise (under 100 words). Be helpful, polite, and professional. If the question is about pricing or booking, direct them to use the website menu. Focus on stain removal, fabric care, and laundry tips.",
      }
    });
    
    return response.text || "I'm sorry, I couldn't process that request right now. Please try again.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I'm currently offline. Please contact our support team.";
  }
};