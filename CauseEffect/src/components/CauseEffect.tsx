import React, {useState, useEffect} from 'react'
import {Items, AppState} from './Types.ts'

const CauseEffect:React.FC = () => {
    const [state, setState] = useState({
        items: [],
        selectedItems: null,
        loading: true
    })

    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState<string>('all')

    useEffect(() =>{
        const mockItems:Items[] = [
            {
                id: 1,
                title: 'Project Alpha',
                category: 'development',
                description: 'Frontend application development',
                details: 'A comprehensive React application with TypeScript and Tailwind CSS. Includes state management, responsive design, and modern UI components.',
                image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop',
                tags: ['React', 'TypeScript', 'Tailwind'],
                status: 'active'
            },
            {
                id: 2,
                title: 'Database Migration',
                category: 'database',
                description: 'Migrate from SQL to NoSQL',
                details: 'Complete migration of database infrastructure from traditional SQL to modern NoSQL solution. Includes data transformation, validation, and performance optimization.',
                image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=300&h=200&fit=crop',
                tags: ['MongoDB', 'Migration', 'Data'],
                status: 'completed'
            },
            {
                id: 3,
                title: 'UI/UX Redesign',
                category: 'design',
                description: 'Modernize user interface and experience',
                details: 'Complete overhaul of user interface focusing on modern design principles, accessibility, and improved user experience across all devices.',
                image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop',
                tags: ['Figma', 'Design', 'UX'],
                status: 'upcoming'
            },
            {
                id: 4,
                title: 'API Integration',
                category: 'development',
                description: 'Integrate third-party services',
                details: 'Implementation of various third-party APIs including payment processing, authentication, and data analytics services with proper error handling and security.',
                image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop',
                tags: ['API', 'REST', 'Integration'],
                status: 'active'
            },
            {
                id: 5,
                title: 'Performance Optimization',
                category: 'optimization',
                description: 'Improve application performance',
                details: 'Comprehensive performance audit and optimization including code splitting, lazy loading, image optimization, and database query improvements.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
                tags: ['Performance', 'Optimization', 'Speed'],
                status: 'upcoming'
            }
        ];
        setTimeout(() => {
            setState({
                items: mockItems,
                selectedItem: mockItems[0], // Select first item by default
                loading: false
            });
        }, 1000);
    },[])

    return (
        <div></div>
    )
}

export default CauseEffect;